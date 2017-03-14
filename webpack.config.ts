import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
    devtool: 'source-map',
    entry: {
        main: './index.ts',
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
        mainFields: ['module'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader'],
            },
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
        }),
    ],
};

export default config;