import { ArrowUpRight } from "lucide-react";

export const Caption = ({ source, href, dark = false, className = "" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group inline-flex items-center gap-1 font-mono text-[11px] tracking-wide transition-colors duration-200 ${
      dark
        ? "text-slate-500 hover:text-slate-300"
        : "text-ink-mute hover:text-emerald-700"
    } ${className}`}
  >
    <span className="border-b border-dotted border-current pb-px">{source}</span>
    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
  </a>
);

export const SOURCES = {
  cibilParadox:
    "https://www.whalesbook.com/news/English/bankingfinance/Personal-Loans-To-Entrepreneurs-Grow-18x-Faster-Than-Business-Credit/6a47bde0c5f6fc7a764dcf17",
  sidbiReport:
    "https://www.sidbi.in/uploads/Understanding_Indian_MSME_sector_Progress_and_Challenges_13_05_25_Final.pdf",
  gstSahay: "https://www.sidbi.in/gst-sahay",
  fitRank:
    "https://newsroom.transunioncibil.com/under-sidbis-mentorship-fit-rank-for-msmes-launched-by-transunion-cibil-and-online-psb-loans-limited-opl/",
  cibilPulse:
    "https://newsroom.transunioncibil.com/msme-credit-growth-momentum-continues-with-rising-demand-and-stable-performance/",
  sbfc:
    "https://www.kalkine.co.in/article/announcements/sbfc-finance-limited-nsesbfc-what-key-insights-were-shared-in-the-investor-presentation",
  aye: "https://www.tipranks.com/news/company-announcements/aye-finance-posts-strong-fy26-growth-with-improving-asset-quality-and-record-collections",
  fiveStar:
    "https://www.careratings.com/upload/CompanyFiles/PR/202506120620_Five-Star_Business_Finance_Limited.pdf",
  neoGrowth: "https://www.icra.in/Rating/GetRationalReportFilePdf?id=144512",
  rbi: "https://www.rbi.org.in",
  sahamati: "https://sahamati.org.in/",
};
