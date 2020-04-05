import React from 'react';
import { useHistory } from "react-router-dom";
import { UserInfoType } from "types";
import { findUser } from "info/userInfo";
import styles from './ResumePDF.module.scss';
import Sidebar from "components/sidebar/Sidebar";


const ResumePDF = ({ username, allUsers }: { username: string, allUsers: UserInfoType[] }) => {

    const history = useHistory();
    const user: UserInfoType | undefined = findUser(allUsers, username);
    const userPDF = user?.pdfFileName;

    return (

        <>
            {
                user
                    ?
                    <div>
                        <embed className={styles["resume-pdf-page"]} src={require(`../../../assets/documents/${userPDF}`)} type="application/pdf" width="100%" height="600px"/>
                    </div>
                    : history.goBack()
            }
        </>

        
    );
}

export default ResumePDF;
