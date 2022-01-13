const host = location.origin.replace(/^http/, 'ws') + `/api`;
sessionStorage.setItem('token', 1);

console.log(host);



login = () => {
    console.log("login")

    const object = { name: 'James Gordon' };

    fetch("/login",
        {
            body: JSON.stringify(object),
            method: "POST"
        }).then((response) => {

            console.log(response)

            const ws = new WebSocket(host);

            ws.onmessage = msg => {
                console.log(msg.data)
            }

            ws.onopen = () => {
                console.log("ws open")
                ws.send("Hello server!");
            }

        })
}