import { Html, Head, Main, NextScript } from "next/document";
import { DocumentHeadTags, documentGetInitialProps, DocumentHeadTagsProps } from '@mui/material-nextjs/v15-pagesRouter'

const ZHKeywords = [
  "冰箱日记",
  "AI识别",
  "应用",
  "购物小票",
  "食品包装",
  "水果照片",
  "保质期",
  "保存方法",
  "生产日期",
  "提醒",
  "过期日期",
  "下载",
  "功能",
  "设备AI",
  "数据提取",
  "减少用户输入",
]

const ENKeywords = [
  "Refrigerator Diary",
  "AI recognition",
  "app",
  "shopping receipts",
  "food packaging",
  "fruit photos",
  "shelf life",
  "preservation methods",
  "production dates",
  "reminders",
  "expiration dates",
  "download",
  "features",
  "on-device AI",
  "data extraction",
  "reduce user input",
  "improve user experience"
]

const lowCompetitionKeywords = [
  "AI食品识别",
  "购物小票识别",
  "水果保质期提醒",
  "食品包装识别",
  "智能冰箱管理",
  "过期食品提醒",
  "设备端AI应用",
  "减少用户输入的APP",
  "提高用户体验的食品管理",
  "通过照片识别食品信息"
];

const lowCompetitionKeywordsEN = [
  "AI food recognition",
  "shopping receipt recognition",
  "fruit shelf life reminder",
  "food packaging recognition",
  "smart refrigerator management",
  "expired food reminder",
  "on-device AI app",
  "app that reduces user input",
  "food management that improves user experience",
  "recognize food information through photos"
];
export default function Document(props: DocumentHeadTagsProps) {
  return (
    <Html lang="en">
      <Head>
        <meta name="keywords" content={ENKeywords.concat(ZHKeywords).concat(lowCompetitionKeywords).concat(lowCompetitionKeywordsEN).join(", ")} />
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = documentGetInitialProps;