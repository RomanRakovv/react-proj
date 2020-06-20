import React from "react";

class ProfileStatus extends React.Component {
    render() {
        return (
            <div>
                {this.props.state.editMode &&
                    <input autoFocus={true} onBlur={this.props.deactivateEditMode}
                           value={this.props.state.status}
                           placeholder={'Введите ваш статус'}
                    />
                }
                {!this.props.state.editMode &&
                <div>
                    <span onClick={this.props.activateEditMode}>{this.props.state.status}</span>
                </div>
                }


            </div>
        )
    }
}

export default ProfileStatus;