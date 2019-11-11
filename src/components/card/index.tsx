import React from "react";
import './index.css';
export interface CardProps {
  title: string;
}
export default class Card extends React.Component<CardProps, any> {
  public render = () => (
    <div id="card">
      <div className="box">
        {this.props.title}
        <div className="box">Hello world</div>
      </div>
    </div>
  );
}
