import React from "react"
import Text from "../../shared/Text"
import Image from "../../shared/Image"
import certificated from "../../../assets/certificated.png"
const CertificatedExternal = (props) => {
    return (
        <div className="certificate-container">
            <Text title={"Certificated External Auditor?"}
                description={"An AuditKos Certified Auditor will be ready to apply the acquired knowledge, skills and exercise professional judgment in applying and evaluating the principles of financial reporting and auditing of financial statements and to practice business situations and contexts, in an independent manner biased and professional."}
                description1={"Certification of individuals is based on the criteria set by applicable laws and in accordance with international auditing standards. The Auditor Certification Program is designed to contribute to good and quality financial management. The purpose of AuditKos is to train and certify individuals who possess high integrity, implement the Code of Professional Ethics and establish public credibility for auditing financial statements."} />

            <Image img={certificated} />
        </div>
    )
}
export default CertificatedExternal

