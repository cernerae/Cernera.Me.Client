
export async function sendEmail(info: any, userEmail: any) {
    const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: info.name,
            emailAddress: info.emailAddress,
            subject: info.subject,
            message: info.message,
            userEmail: userEmail
        })
    });

    let body = await response.text();

    return body;
    
}