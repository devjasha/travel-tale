import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./PostUser.module.scss";

type PostUserProps = {
  postUserProfilePicture: string;
  postUserName: string;
  postUserPostTime: string;
  postUserPostDate: string;
  postUserProfileURL: string;
};

const PostUser: FC<PostUserProps> = ({
  postUserProfilePicture,
  postUserName,
  postUserPostTime,
  postUserPostDate,
  postUserProfileURL,
}) => {
  return (
    <Link href={postUserProfileURL} className={styles.wrapper}>
      <Image
        src={postUserProfilePicture}
        alt={postUserName}
        height={100}
        width={100}
        unoptimized
        className={styles.profilePicture}
      />
      <div>
        <p className={styles.userName}>{postUserName}</p>
        <p className={styles.postTime}>
          {postUserPostDate} at {postUserPostTime}
        </p>
      </div>
    </Link>
  );
};

export default PostUser;
