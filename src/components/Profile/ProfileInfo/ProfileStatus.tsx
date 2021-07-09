import React, {ChangeEvent} from "react";


export class ProfileStatus extends React.Component <statusType>{
    componentDidUpdate(prevProps: statusType) {
        if (this.props.statusAuthor !== prevProps.statusAuthor) {
            this.setState({
                status : this.props.statusAuthor
            })
        }
    }

    state = {
        editMode: false,
        status: this.props.statusAuthor
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })

    }
    deActivateEditMode () {
        this.setState({
            editMode: false
        })
        this.props.setStatusAuthor(this.state.status)
    }
    setCurentInput = (e:  ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        {console.log(this.props)}
        return (
            <div>
                { !this.state.editMode && <div>
                    <span onDoubleClick={this.activateEditMode} >{this.props.statusAuthor || '-----'}</span>
                </div>}
                { this.state.editMode && <div>
                    <input autoFocus = {true}
                           onBlur = {this.deActivateEditMode.bind(this)}
                           value = {this.state.status }
                           onChange={this.setCurentInput}
                    />
                </div>}
            </div>
        )
    }
}

type statusType = {
    statusAuthor: string
    setStatusAuthor: (param: string) => void
}