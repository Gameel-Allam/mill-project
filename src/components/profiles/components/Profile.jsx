// Profile.js
import styles from './Profile.module.scss';

const Profile = () => {
    return (
        <div className={styles.profile}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYjf9fiWnqDTjDgerl2gH5BniBpfSMU1pYAkxCWcyDLBR65ltfAyYDt2Tf_EY5W31JTA&usqp=CAU" alt="Profile" className={styles.picture} />
            <h2 className={styles.name}>احمد سعيد</h2>
            <p className={styles.bio}>
                حارس امن
            </p>
        </div>
    );
};

export default Profile;
