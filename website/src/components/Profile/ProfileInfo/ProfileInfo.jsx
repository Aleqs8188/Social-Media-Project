import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-10.jpg?itok=Whi8hHo9"
                    width='1000' height='300'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descriptions
            </div>
        </div>
    )
}

export default ProfileInfo;