import { getProfileThunk } from "../../redux/actions/profileThunks";
import Profile from "./Profile";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getProfile: () => {
            dispatch(getProfileThunk())
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer