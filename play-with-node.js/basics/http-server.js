import cluster from 'node:cluster';
import http from 'node:http';
import { availableParallelism } from 'node:os';
import process from 'node:process';


// const numCPUs = availableParallelism();
const numCPUs = 8;

if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);


    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });

} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    http.createServer((req, res) => {
        console.log(req.url + " received by worker " + process.pid);
        res.writeHead(200);
        let i = 0;
        while (i < 1000000000) {
            i++;
        }
        res.end("Hello World " + i);
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}