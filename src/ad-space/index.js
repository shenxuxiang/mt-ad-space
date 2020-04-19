import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import { Quad, requestAnimationFrame, cancelAnimationFrame } from './utils';
import './index.less';

// 动画的速度
const SPEED = 10;

const LIMITDIST = 50;

export default class AdSpace extends PureComponent {
  static propTypes = {
    width: PropTypes.number.isRequired,
    spacing: PropTypes.number.isRequired,
    children: PropTypes.node,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    children: [],
    onChange: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.wrapperRef = createRef(null);
    this.boxRef = createRef(null);
    // 每个 AdSpace 的实际宽度（width + marginRight）
    this.width = props.width + props.spacing;
    // 保存当前 wrapperRef 的 translateX 的值
    this.offsetX = 0;
  }

  componentDidMount() {
    const { children, width, spacing } = this.props;
    // if (children.length <= 1) return;
    const boxWidth = this.boxRef.current.clientWidth;
    // 可视区可完全容纳几个 AdSpace
    const num = Math.floor(boxWidth / width);
    // 第二个 AdSpace 滑动到最左边的位置时，wrapperRef 的 translateX 的值
    this.minOffsetLeft = spacing + this.width - (
      (boxWidth - (width * num + (num - 1) * spacing)) / 2
    );
    // 最后一个 AdSpace 完全展示在可视区最右边时，wrapperRef 的 translateX 的值
    this.maxOffsetLeft = this.wrapperRef.current.scrollWidth - boxWidth;
    // 一共多少个子元素，还要再减去 完全展示的子元素的个数
    this.len = children.length - num;

    this.wrapperRef.current.addEventListener('touchstart', this.handleTouchStart, false);
    this.wrapperRef.current.addEventListener('touchmove', this.handleTouchMove, false);
    this.wrapperRef.current.addEventListener('touchend', this.handleTouchEnd, false);
  }

  handleTouchStart = (event) => {
    if (this.requestAnimationID) {
      cancelAnimationFrame(this.requestAnimationID);
      this.requestAnimationID = null;
      this.offsetX = this.dist;
    }
    this.startX = event.touches[0].clientX;
    this.startY = event.touches[0].clientY;
    this.slideX = 0;
    this.slideStatus = 'running';
  };

  handleTouchMove = (event) => {
    this.slideX = event.changedTouches[0].clientX - this.startX;
    this.slideY = event.changedTouches[0].clientY - this.startY;
    if (
      Math.abs(this.slideX) >= Math.abs(this.slideY) &&
      this.slideStatus === 'running'
    ) {
      // 当横向滑动时，阻止默认行为和冒泡
      event.preventDefault();
      this.slideStatus = 'horizontal';
    } else if (
      Math.abs(this.slideX) < Math.abs(this.slideY) &&
      this.slideStatus === 'running'
    ) {
      this.slideStatus = 'vertical';
    }
    if (this.slideStatus === 'vertical') return;

    this.translateX(this.offsetX + this.slideX);
  }

  handleTouchEnd = () => {
    const { index } = this.state;
    let indicator = index;

    if (this.slideStatus === 'vertical') {
      this.animation(indicator);
      return;
    }

    this.offsetX += this.slideX;
    // 当前是第一张图片且是向右滑动 或者 当前是最后张图片且是向左滑动
    if (
      (index === 0 && this.slideX > 0) ||
      (index === this.len && this.slideX < 0)
    ) {
      this.animation(indicator);
      return;
    }

    if (this.slideX > 0 && this.slideX >= LIMITDIST) {
      indicator -= 1;
    } else if (this.slideX < 0 && this.slideX < -LIMITDIST) {
      indicator += 1;
    }

    this.animation(indicator);
  }

  // 动画过度效果
  animation = (indicator) => {
    const { index } = this.state;
    // 动画执行的次数
    let start = 0;
    // 目标位置
    let targetPosition;
    if (indicator === 0) {
      targetPosition = 0;
    } else if (indicator === this.len) {
      targetPosition = -this.maxOffsetLeft;
    } else if (indicator === 1 && index === 0) {
      // 当从第一个盒子滑到第二个盒子的时候
      targetPosition = -this.minOffsetLeft;
    } else if (indicator === this.len - 1 && index === this.len) {
      // 当从最后一个滑到倒数第二个的时候
      targetPosition = -(this.maxOffsetLeft - this.minOffsetLeft);
    } else {
      targetPosition = -((indicator - 1) * this.width + this.minOffsetLeft);
    }
    const offset = targetPosition - this.offsetX;
    // 动画会执行多少次，取整
    const duration = Math.abs(offset / SPEED);

    const run = () => {
      start += 1;
      this.dist = Quad(start, this.offsetX, offset, duration);
      if (start + 1 >= duration) this.dist = targetPosition;
      this.translateX(this.dist);
      if (start < duration) {
        this.requestAnimationID = requestAnimationFrame(run);
      } else {
        cancelAnimationFrame(this.requestAnimationID);
        this.requestAnimationID = null;
        this.offsetX = this.dist;
      }
    };
    if (indicator === index) {
      run();
    } else {
      this.setState({ index: indicator }, () => {
        this.props.onChange(indicator);
        run();
      });
    }
  }

  translateX = (x) => {
    this.wrapperRef.current.style.transform = `translateX(${x}px)`;
    this.wrapperRef.current.style.webkitTransform = `translateX(${x}px)`;
  }

  render() {
    const { children, spacing, width } = this.props;
    return (
      <div className="mt-ad-space" ref={this.boxRef}>
        <div
          className="mt-ad-space-wrapper"
          style={{
            paddingLeft: `${children.length > 1 ? spacing : 0}px`,
            width: `${children.length > 1 ? `${children.length * (width + spacing)}px` : '100%'}`,
          }}
          ref={this.wrapperRef}
        >
          {
            React.Children.map(children, (child) =>
              React.cloneElement(child, {
                style: {
                  margin: `${children.length > 1 ? `0 ${spacing}px 0 0` : 'auto'}`,
                  width: `${width}px`,
                  ...child.props.style,
                },
              })
            )
          }
        </div>
      </div>
    );
  }
}
