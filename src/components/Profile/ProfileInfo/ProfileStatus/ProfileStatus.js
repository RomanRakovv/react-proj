import React from "react";

class ProfileStatus extends React.Component {
    render() {
        return (
            <div>
                {this.props.editMode &&
                    <input onChange={ this.props.onStatusChange } autoFocus={true} onBlur={this.props.deactivateEditMode}
                           value={this.props.status}
                           placeholder={'Введите ваш статус'}
                    />
                }
                {!this.props.editMode &&
                <div>
                    <span onDoubleClick={this.props.activateEditMode}>{this.props.status || '----'}</span>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;