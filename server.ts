import * as net from "net"; // importing the "net" module

function newConnection(socket: net.Socket): void {
	console.log('new connection added', socket.remoteAddress, socket.remotePort);
	socket.on('end', () => {
		console.log("END OF FILE (EOF)")
	})

	socket.on('data', (data: Buffer) => {
		console.log('data', data);
		socket.write(data);

		if (data.includes('q')) {
			console.log('closing');
			socket.end()
		}
	})
}

let server = net.createServer(); // creates a listening socket.
server.on('connection', newConnection);
server.on('error', (err: Error) => { throw err; }); // the error event
server.listen({ host: "127.0.0.1", port: 3000 }); // listens to this address


