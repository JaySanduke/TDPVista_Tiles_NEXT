import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  InputGroup,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import Button from 'reactstrap/lib/Button';

const MyCoursesSearch= (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar 
       light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
              <div>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              Sort By
              </DropdownToggle>
              <DropdownMenu down>
                <DropdownItem>
                  Recently Accessed
                </DropdownItem>
                <DropdownItem>
                  Recently Enrolled
                </DropdownItem>
                <DropdownItem>
                A-Z
                </DropdownItem>
                <DropdownItem>
                  Z-A
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown></div>
            <br/>
            <h2>Filter</h2>
            <div>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Progress
              </DropdownToggle>
              <DropdownMenu down>
                <DropdownItem>
                  In Progress
                </DropdownItem>
                <DropdownItem>
                  Not Started
                </DropdownItem>
                <DropdownItem>
                  Completed
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Categories
              </DropdownToggle>
              <DropdownMenu down>
                <DropdownItem>
                  Web Development
                </DropdownItem>
                <DropdownItem>
                  App Development
                </DropdownItem>
                <DropdownItem>
                  Networking
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </div>
            <NavbarText className="text-dark">Reset</NavbarText>
          </Nav>
          <NavbarText>
          <InputGroup>
        <Input placeholder="Search.." />
        <Button
        color="default"
        className="text-white"
        href="#pablo"
        onClick={e => e.preventDefault()}>
          Search
        </Button>
      </InputGroup>
          </NavbarText>
        </Collapse>
      </Navbar>
    </>
  );
}

export default MyCoursesSearch;