import React, { Component } from "react";

interface IProps {
  name: string;
  value: any;
  onChange: any;
  options: Array<any>;
}

export default class Select extends Component<IProps, {}> {
  render() {
    return (
      <select
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.onChange}
      >
        {this.props.options.map((status) => {
          return (
            <option key={status} value={status}>
              {status}
            </option>
          );
        })}
      </select>
    );
  }
}
