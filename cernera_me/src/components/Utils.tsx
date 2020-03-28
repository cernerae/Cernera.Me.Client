
export async function sendEmail(info: any) {
    const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: info.name,
            email_address: info.email_address,
            subject: info.subject,
            message: info.message
        })
    });

    let body = await response.text();

    console.log(`done.`);
    
}