import React from 'react';
import Sidebar from 'react-sidebar';

class Sample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sidebarOpen: true
      };
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
  
    onSetSidebarOpen(open) {
      this.setState({ sidebarOpen: open });
    }
  
    render() {
      return (
        <Sidebar
          sidebar={<div><b>サイドバー</b><br></br><b>サイドバー</b></div>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
        >
          <button onClick={() => this.onSetSidebarOpen(true)}>
            サイドーバーを開く
          </button>
        </Sidebar>
      );
    }
  }