import { useState } from "react";
import axios from "axios";

const NotificationForm = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        try {
            await axios.post("http://localhost:5000/send", { email, phone, message });
            setStatus("Notification sent successfully!");
        } catch (error) {
            setStatus("Failed to send notification. Try again!");
            console.error("Error:", error.response?.data || error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formBox} className="form-box">
                <h2 style={styles.title}>📨 Send Notification</h2>

                {status && <p style={{ ...styles.status, color: status.startsWith("Notification") ? "#10b981" : "#ef4444" }}>{status}</p>}

                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.inputField}
                    />
                    <input
                        type="text"
                        placeholder="Enter Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={styles.inputField}
                    />
                    <textarea
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{ ...styles.inputField, height: "80px", resize: "none" }}
                    />
                    <button type="submit" style={styles.submitBtn} className="submit-btn" disabled={loading}>
                        {loading ? <div style={styles.loader}></div> : "Send Notification"}
                    </button>
                </form>
            </div>

            <style>
                {`
                    .form-box:hover {
                        background: rgba(255, 255, 255, 0.2);
                        transition: 0.3s;
                        box-shadow: 0 6px 15px rgba(255, 255, 255, 0.3);
                    }
                    .submit-btn:hover {
                        background: linear-gradient(to right, #aaaaaa, #ffffff);
                        transform: scale(1.05);
                        transition: 0.3s;
                    }
                `}
            </style>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to right, #000000, #333333)",
    },
    formBox: {
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "15px",
        padding: "25px",
        width: "400px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(255, 255, 255, 0.2)",
        border: "2px solid rgba(255, 255, 255, 0.3)",
        transition: "0.3s",
    },
    title: {
        color: "#ffffff",
        fontSize: "22px",
        fontWeight: "bold",
        marginBottom: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    inputField: {
        width: "100%",
        padding: "5px",
        marginBottom: "15px",
        border: "2px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "8px",
        fontSize: "16px",
        background: "rgba(255, 255, 255, 0.1)",
        color: "#ffffff",
        outline: "none",
        transition: "0.3s",
    },
    submitBtn: {
        width: "100%",
        padding: "12px",
        fontSize: "16px",
        fontWeight: "bold",
        background: "linear-gradient(to right, #ffffff, #aaaaaa)",
        color: "black",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "0.3s",
        position: "relative",
    },
    status: {
        marginBottom: "10px",
        fontSize: "14px",
        color: "#ffffff",
    },
};

export default NotificationForm;
