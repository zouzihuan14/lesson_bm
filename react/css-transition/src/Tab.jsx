import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./TransitionGroupDemo.css";
// CSSTransition
// 用 key 追踪内部的 CSSTransition
// 能知道 哪个加进来 哪个移除
let uid = 2;
class Tabs extends Component {
  state = {
    tabData: [
      {
        id: 1,
        panel: "选项1"
      },
      {
        id: 2,
        panel: "选项2"
      }
    ]
  };

  addTab = () => {
    const { tabData } = this.state;
    uid++;
    tabData.push({
      id: uid,
      panel: `选项${uid}`
    });
    this.setState({
      tabData
    });
  };

  deleteTab = id => {
    let { tabData } = this.state;
    let index = -1;
    tabData.some((p, i) => {
      if (p.id === id) {
        index = i;
        return true;
      }
      return false;
    });
    if (index > -1) {
      tabData.splice(index, 1);
      this.setState({
        tabData
      });
    }
  };

  render() {
    const { tabData } = this.state;

    const renderTabs = () => {
      return tabData.map((item, index) => {
        return (
          <CSSTransition
            timeout={500}
            classNames="tabs-wrap"
            key={`tab${item.id}`}
          >
            <div className={`tab-item`}>
              {item.panel}
              <span
                className="btns btn-delete"
                onClick={() => this.deleteTab(item.id)}
              >
                ✕
              </span>
            </div>
          </CSSTransition>
        );
      });
    };

    return (
      <div className="tabs main">
        <TransitionGroup>{renderTabs()}</TransitionGroup>
        <span className="btns btn-add" onClick={this.addTab}>
          +
        </span>
      </div>
    );
  }
}
export default Tabs;
