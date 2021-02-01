let PROTO_PATH = __dirname + '/protos/helloworld.proto';

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function salomBer(call, callback) {
    callback(null, {javob: 'Hello ' + call.request.kimga});
}

function main() {
    let server = new grpc.Server();
    server.addService(hello_proto.salomBer.service, {qalesan: salomBer});
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
        server.start();
        console.log('Server run on 0.0.0.0:50051');
    });
}

main();