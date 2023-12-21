import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

import qrcodeIconURL from './qrcode/qrcode.png';
import qrcodeInsetIconURL from './qrcode/qrcode-small.svg';

import numberbankIconURL from './numberbank/numberbank_entry.png';
import numberbankInsetIconURL from './numberbank/numberbank_inset.png';

import pasorichIconURL from './pasorich/pasorich_entry.png';
import pasorichInsetIconURL from './pasorich/pasorich_inset.png';

export default [
    {
        name: (
            <FormattedMessage
<<<<<<< HEAD
                defaultMessage="PaSoRich"
                description="Name for PaSoRich extension"
                id="gui.extension.pasorichblocks.name"
=======
                defaultMessage='PaSoRich 0.7.1'
                description='PaSoRich 0.7.1'
                id='gui.extension.pasorichblocks.name'
>>>>>>> 0d880eef5f5fe24b382b829b43896d7a0e3b9da2
            />
        ),
        extensionId: 'pasorich',
        collaborator: 'con3office',
        iconURL: pasorichIconURL,
        insetIconURL: pasorichInsetIconURL,
        description: (
            <FormattedMessage
<<<<<<< HEAD
                defaultMessage="Read SmartCard IDm."
                description="Read SmartCard IDm."
                id="gui.extension.pasorichblocks.description"
=======
                defaultMessage='Read SmartCard IDm.{psrcredit_en}'
                description='Read SmartCard IDm.'
                id='gui.extension.pasorichblocks.description'
                values={{
                    psrcredit_ja:<div style={{fontSize: '0.6em'}}>PaSoRi はソニーグループ株式会社またはその関連会社の登録商標または商標です。</div>,
                    psrcredit_ja_Hira:<div style={{fontSize: '0.6em', lineHeight: '1.3', marginTop: '0.5em'}}>パソリ はソニーグループまたはかんれんがいしゃのとうろくしょうひょうです。</div>,
                    psrcredit_en:<div style={{fontSize: '0.6em'}}>PaSoRi is a registered trademark or trademark of Sony Group Corporation or its affiliated companies.</div>,
                }}
>>>>>>> 0d880eef5f5fe24b382b829b43896d7a0e3b9da2
            />
        ),
        featured: true,
        translationMap: {
            'ja': {
<<<<<<< HEAD
                'gui.extension.pasorichblocks.name': 'パソリッチ 2.0',
                'gui.extension.pasorichblocks.description': 'ICカードのIDmを読み取る。'
            },
            'ja-Hira': {
                'gui.extension.pasorichblocks.name': 'ぱそりっち 2.0',
                'gui.extension.pasorichblocks.description': 'ICかーどのばんごうをよみとる。'
            }
        }
=======
                'gui.extension.pasorichblocks.name': 'パソリッチ 0.7.1',
                'gui.extension.pasorichblocks.description': 'ICカードのIDmを読み取る。{psrcredit_ja}'
            },
            'ja-Hira': {
                'gui.extension.pasorichblocks.name': 'ぱそりっち 0.7.1',
                'gui.extension.pasorichblocks.description': 'ICかーどのばんごうをよみとる。{psrcredit_ja_Hira}'
            }}
>>>>>>> 0d880eef5f5fe24b382b829b43896d7a0e3b9da2
    },
    {
        name: (
            <FormattedMessage
<<<<<<< HEAD
                defaultMessage="NumberBank 2.0"
                description="Name for NumberBank extension"
                id="gui.extension.numberbankblocks.name"
=======
                defaultMessage='NumberBank 2.0'
                description='NumberBank 2.0'
                id='gui.extension.numberbankblocks.name'
>>>>>>> 0d880eef5f5fe24b382b829b43896d7a0e3b9da2
            />
        ),
        extensionId: 'numberbank',
        collaborator: 'con3office',
        iconURL: numberbankIconURL,
        insetIconURL: numberbankInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Store value to cloud."
                description="Store value to cloud."
                id="gui.extension.numberbankblocks.description"
            />
        ),
        internetConnectionRequired: true,
        featured: true,
        translationMap: {
            'ja': {
                'gui.extension.numberbankblocks.name': 'ナンバーバンク 2.0',
                'gui.extension.numberbankblocks.description': '値をクラウドに保存する。'
            },
            'ja-Hira': {
                'gui.extension.numberbankblocks.name': 'なんばーばんく 2.0',
                'gui.extension.numberbankblocks.description': 'あたいをクラウドにほぞんする。'
            }
        }
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="QR Code"
                description="Name for the QR Code extension"
                id="gui.extension.qrcodeblocks.name"
            />
        ),
        extensionId: 'qrcode',
        collaborator: 'Sugiura Lab',
        iconURL: qrcodeIconURL,
        insetIconURL: qrcodeInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Scan QR Code.{credit_en}"
                description="Description for the QR Code extension"
                values={{
                    // eslint-disable-next-line react/jsx-no-literals
                    credit_ja: <div style={{fontSize: '0.6em'}}>QRコードは株式会社デンソーウェーブの登録商標です。</div>,
                    // eslint-disable-next-line react/jsx-no-literals
                    credit_ja_Hira: <div style={{fontSize: '0.6em', lineHeight: '1.3', marginTop: '0.5em'}}>QRコードはかぶしきがいしゃデンソーウェーブのとうろくしょうひょうです。</div>,
                    // eslint-disable-next-line react/jsx-no-literals
                    credit_en: <div style={{fontSize: '0.6em'}}>QR Code is a registered trademark of DENSO WAVE.</div>
                }}
                id="gui.extension.qrcodeblocks.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: false,
        bluetoothRequired: false,
        translationMap: {
            'ja': {
                'gui.extension.qrcodeblocks.name': 'QRコード',
                'gui.extension.qrcodeblocks.description': 'QRコードを読み取ります。{credit_ja}'
            },
            'ja-Hira': {
                'gui.extension.qrcodeblocks.name': 'QRコード',
                'gui.extension.qrcodeblocks.description': 'QRコードをよみとります。{credit_ja_Hira}'
            }
        }
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        collaborator: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Bring robotic creations to life."
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.boost.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense push, pull, motion, and spin."
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their force and acceleration sensor."
                id="gui.extension.gdxfor.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/vernier'
    }
];
