import React from "react";

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
// core components
import {Link} from "react-router-dom";
import "../assets/css/courses.css";

class PaginationC extends React.Component {
  render() {
    return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink href={this.props.course}>
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href={this.props.course + "2"}> 
          <Link>2</Link>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink  href={this.props.course + "3"}>
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink  href={this.props.course + "4"}>
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink  href={this.props.course + "5"}>
          5
        </PaginationLink>
      </PaginationItem>
    </Pagination>
    );
  }
}

export default PaginationC;