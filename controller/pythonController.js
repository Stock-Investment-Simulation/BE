const User = require('../schemas/userinfo');
const common = require('./common');
const response = require('../config/response');
const baseResponse = require('../config/baseResponse');
const spawn = require('child_process').spawn;

module.exports = {
    getNames: async (req,res) => {
        // const spawn = require('child_process').spawn;


        const result_02 = spawn('python3', ['./controller/pyStocks.py']);
        // "카레유", 20"을 파라미터로 전달
        result_02.stdout.on('data', (result)=>{
            console.log(result.toString());
            res.status(200).json(response(baseResponse.SUCCESS, result.toString));
        });
        result_02.stderr.on('data', (result)=>{
            console.log(result.toString());
            res.status(200).json(response(baseResponse.SUCCESS, result.toString));
        });

                // const result = spawn('python', ['print.py']);
// 1) child-process의 spawn을 통해 "python print.py" 명령어를 실행하여 파이썬 코드를 구동한다.

// 2) stdout의 'data' 이벤트 리스터를 통해 결과를 받아서 출력한다.
        // result.stdout.on('data', function(data) {
        //     console.log(data.toString());
        //     res.status(200).response(baseResponse.SUCCESS, data.toString);
        // });

        // result.stderr.on('data', function(data) {
        //     console.log(data.toString());
        //     res.status(200).response(baseResponse.SUCCESS, data.toString);
        // });
// 3) 위 코드에서 data를 toString()없이 사용하면, 버퍼가 출력되니 주의.
//   - <Buffer 49 20 61 6d 20 70 79 74 68 6f 6e 0a>

        // const { exec } = require('child_process');

        // exec('python your_script.py', (error, stdout, stderr) => {
        //     const result_02 = spawn('python', ['print.py', '카레유', '20']);
        //     // "카레유", 20"을 파라미터로 전달
        //     result_02.stdout.on('data', (result)=>{
        //         console.log(result.toString());
        //         res.status(200).json(response(baseResponse.SUCCESS, result.toString));
        //     });
        //     result_02.stderr.on('data', (result)=>{
        //         console.log(result.toString());
        //         res.status(200).json(response(baseResponse.SUCCESS, result.toString));
        //     });
        // });
    },

    get_names_by_theme: async (themeCode) => {

        switch (theme) {
            case 'TE':
            case 'CP':
            case 'SF':
            case 'CR':
            case 'MP':
            case 'DC':
            default:
                break;
        }

        const result = spawn('python3', ['./controller/pyStocks.py', stockGroupList]);
        // "카레유", 20"을 파라미터로 전달
        result_02.stdout.on('data', (result)=>{
            console.log(result.toString());
            res.status(200).json(response(baseResponse.SUCCESS, result.toString));
        });
        result_02.stderr.on('data', (result)=>{
            console.log(result.toString());
            res.status(200).json(response(baseResponse.SUCCESS, result.toString));
        });
    }
    
}