import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import firebase from "../../config/firebase-tiles";
import { Button, Card, CardHeader, CardBody, Container } from "reactstrap";
import DataTable from "react-data-table-component";
// core components
import Header from "components/Headers/admin.js";


class workshoptaskSubmission extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      todayDate =
        today.getFullYear() +
        "-" +
        ((today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1)) +
        "-" +
        ((today.getDate() < 10 ? "0" : "") + today.getDate());
    var time = today.getHours() + ":" + today.getMinutes();

    this.lock = this.lock.bind(this);
    this.unlock = this.unlock.bind(this);
    this.state = {
      nowTime: time,
      todyData: todayDate,
      task_id: "-MgPLOOQMjKHqNn_nuQc",
      data: [],
      submissionData: null,
    };
  }

  lock = (id, name) => {
    var ref = firebase
      .storage()
      .ref("Tasks/" + this.state.task_id + "/submissions/" + id + "/" + name);
    var metadata = {
      customMetadata: {
        lock: 1,
      },
    };
    ref
      .updateMetadata(metadata)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  unlock = (id, name) => {
    var ref = firebase
      .storage()
      .ref("Tasks/" + this.state.task_id + "/submissions/" + id + "/" + name);
    var metadata = {
      customMetadata: {
        lock: 0,
      },
    };
    ref
      .updateMetadata(metadata)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    var x = [];
    firebase
      .database()
      .ref("Tasks/" + this.state.task_id)
      .once("value")
      .then((snapshot) => {
        var s = snapshot.val();
        if (s) {
          this.setState({
            data: s,
          });
        }
      })
      .then(() => {
        var s = [];
        this.state.data.data.submission.map((item) => {
          var data = {};
          firebase
            .database()
            .ref("users/" + item)
            .once("value")
            .then((snapshot) => {
              data.name = snapshot.val().username;
              data.id = item;
            });
          firebase
            .storage()
            .ref("Tasks/" + this.state.task_id + "/submissions/" + item + "/")
            .listAll()
            .then((res) => {
              res.items[0].getMetadata().then((metadata) => {
                data.fileName = metadata.name;
                data.lock = metadata.customMetadata.lock;
              });
              res.items[0].getDownloadURL().then((url) => {
                data.url = url;
              });
            });
          s.push(data);
        });
        this.setState({ submissionData: s });
      });
  }

  render() {
    const column = [
      { name: "Sr.No.", selector: "number" },
      { name: "Name", selector: "name", sortable: true },
      { name: "Submission", selector: "url" },
      { name: "Lock", selector: "lock" },
    ];
    var body = [];
    if (this.state.submissionData != null) {
      body = this.state.submissionData.map((item,a) => {
        const {name} = item;
        console.log(name);
        console.log(this.state.submissionData[a]);
        console.log(item['name']);
        console.log(JSON.stringify(item).name);
        return {
          number: 1,
          name: item.name,
          url: <a href={item.url}>View</a>,
          lock:
            item.lock === "1" ? (
              <Button
                color="success"
                size="sm"
                onClick={() => this.unlock(item.id, item.fileName)}
              >
                Unlock
              </Button>
            ) : (
              <Button
                size="sm"
                color="danger"
                onClick={() => this.lock(item.id, item.fileName)}
              >
                Lock
              </Button>
            ),
        };
      });

    }
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Card>
            <CardHeader className="d-flex">
              <h1>
                Task Submission:{" "}
                {this.state.data.data ? this.state.data.data.task_name : ""}
              </h1>
            </CardHeader>
            <CardBody>
              {this.state.data.data && (
                <>
                  <p>
                    <b>Due Date: {this.state.data.data.due_date}</b>
                  </p>
                </>
              )}
              {this.state.submissionData != null && (
                <p>
                  <b>Total Submissions: {this.state.submissionData.length}</b>
                </p>
              )}
              <DataTable
                title="Task Submissions"
                columns={column}
                data={body}
              />
            </CardBody>
          </Card>
        </Container>
      </>
    );
  }
}

export default workshoptaskSubmission;
