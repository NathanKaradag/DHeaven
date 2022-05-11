import React from 'react';
import AceEditor from 'react-ace'

// https://securingsincity.github.io/react-ace/

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

class CodeEditor extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            text: ``,
            client: new WebSocket(`wss://localhost:5001/ws?name=${props.roomName}`)
        };
    }

    onChange(newValue) {
        this.setState({ text: newValue });
        this.sendText(newValue)
    }

    componentDidMount() {
        let self = this;

        this.state.client.onopen = function(event) {
            self.state.client.send("New client has entered");
        };

        this.state.client.onmessage = function(event) {
            var x = event.data;
            var y = x.split('\x00');
            var z = y[0];

            self.handleMessage(z);
            //self.updateText(z);
        };
    }

    handleMessage = (txt) => {
        if(txt === "New client has entered"){
            this.sendText(this.state.text);
        }
        else{
            this.updateText(txt);
            console.log(txt);
        }
    }

    updateText = (key) => {
        this.setState({text: key});
    }

    sendText = (key) => {
        this.state.client.send(key);
    }

    closeConnection = () => {
        if(this.state.client != null){
            this.state.client.close(1000, "Exited room");
        }
    }

    render() {
        return (
         <div>
             <AceEditor
                placeholder="Placeholder Text"
                mode="javascript"
                theme="monokai"
                name="blah2"
                onLoad={this.onLoad}
                onChange={(e) => this.onChange(e)}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={this.state.text}
                setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                }}
                width='600px'
            />
            <button onClick={() => {
                this.props.test();
                this.closeConnection()}}>Disconnect</button>
         </div>
        );
    }
}

export default CodeEditor;