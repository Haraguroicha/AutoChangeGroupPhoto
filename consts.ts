export const ADDED_INTO_QUEUE = "已加入序列";
export const ALREADY_IN_QUEUE = "已在序列中";
export const CAN_NOT_CHANGE_ALL_ADMINS_PHOTO = "I can't change group photo if all members are admin!";
export const CAN_NOT_CHANGE_PHOTO = "I can't change your photo!";
export const CONFIG_FILE_PATH = "./config.yaml";
export const DATA_FILE_JSON_PATH = "./data.json";
export const DATA_FILE_PATH = "./data.yaml";
export const GROUP_PHOTO_CAPTION = "#群組圖片";
export const IMAGE_FROM_URL_DIMENSION = (mime: string, w: number, h: number) =>
    `Got Image file in type of ${mime} as resolution in dimension (${w}×${h})`;
export const INVALID_VALUE = "無效的數值";
export const NEED_TELEGRAM_BOT_TOKEN = "Need a valid Telegram Bot Token";
export const NOW_INTERVAL = (interval: string) => `目前設定值為${interval}小時`;
export const QUEUE_REQUEST_TEXT = (type: string, name: string) => `Receive ${type} Queue Request from ${name}`;
export const QUEUE_TEXT = (type: string, name: string) => `Receive ${type} Queue from ${name}`;
export const REGEXP_MATCH_TAG_COMMAND = /(#|＃)(群組圖|群组图)(片)?/ig;
export const SET_INTERVAL = (interval: string) => `已設定變更間隔為${interval}小時`;
export const UPLOADING_PHOTO = (chatId: string | number, image: Buffer, url: string) =>
    `Uploading the Photo from \`${url}\` (size: ${image.byteLength}) to Chat: ${chatId}`;
export const URL_REQUESTED_IS_NOT_A_IMAGE = (url: string) => `要求的網址 \`${url}\` 不是可辨識的圖片，無法安排自動換圖`;
export const URL_REQUESTED_IS_NOT_OK = (url: string) => `要求的網址 \`${url}\` 回傳不是成功要求，請檢查網址`;
export const WAITING_PHOTOS = (count: number, nextTime: string) => `等待的圖片數：${count.toString()}\n下次換圖時間：${nextTime}`;
