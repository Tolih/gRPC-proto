const PROTO_PATH = __dirname + '/protos/helloworld.proto';

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function main() {
    let client = new hello_proto.salomBer('localhost:50051', grpc.credentials.createInsecure());

    client.qalesan({kimga: 'NodeJS'}, function(err, response) {
        console.log('Response: ', response.javob);
    });
}

main();