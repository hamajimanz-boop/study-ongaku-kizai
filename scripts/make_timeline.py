"""タイムライン画像(images/tl_*.png)を作り直すためのスクリプト。

本文(courses/*.js)の年号を直したときに、画像側の年号もそろえるために使う。
元の画像と同じ見た目(1400x620前後・ヒラギノ角ゴシック・青/緑/橙/紫の点)で描く。

使い方: python3 scripts/make_timeline.py   (app/ フォルダで実行)
作ったあとは README.md の手順どおり pngquant で圧縮する。
"""
from PIL import Image, ImageDraw, ImageFont

FONT_DIR = "/System/Library/Fonts/"
BG = (252, 252, 251)
LINE = (225, 224, 218)
COLORS = [(42, 120, 214), (28, 175, 123), (235, 104, 52), (75, 59, 168)]


def font(weight, size):
    return ImageFont.truetype(f"{FONT_DIR}ヒラギノ角ゴシック W{weight}.ttc", size)


def draw_timeline(path, title, events):
    """events: [(年号, 見出し, 補足), ...] 3〜4件"""
    n = len(events)
    width = 1400 if n <= 3 else 1660
    xs = [220 + i * (width - 440) / (n - 1) for i in range(n)]
    im = Image.new("RGB", (width, 620), BG)
    d = ImageDraw.Draw(im)
    d.text((width / 2, 57), title, font=font(8, 44), fill=(11, 11, 11), anchor="mm")
    d.line([(xs[0], 300), (xs[-1], 300)], fill=LINE, width=4)
    for i, (x, (year, label, sub)) in enumerate(zip(xs, events)):
        c = COLORS[i % len(COLORS)]
        d.ellipse([x - 13, 287, x + 13, 313], fill=c)
        d.text((x, 231), year, font=font(8, 34), fill=c, anchor="mm")
        d.text((x, 265), label, font=font(6, 23), fill=(11, 11, 11), anchor="mm")
        d.text((x, 345), sub, font=font(4, 19), fill=(82, 82, 79), anchor="mm")
    im.save(path)


TIMELINES = {
    # hardware_dtm.js の本文に合わせた内容(2026-11-27 見直し)
    "images/tl_apogee.png": ("Apogee のあゆみ", [
        ("1985", "アメリカで創業", "Bennett/Jackson/Heidelbergerの3人"),
        ("1990年代", "UV22 技術で評価確立", "ディザリング技術の先駆け"),
        ("2007", "Duet 発売", "Mac向けFireWire接続のI/F"),
    ]),
    "images/tl_api.png": ("API のあゆみ", [
        ("1968", "アメリカで創業", "Saul Walker/Lou Lindauerら"),
        ("1985年頃", "単体ラックLunchbox発売", "500シリーズの始まり"),
        ("2006", "VPR Alliance発足", "他社も含めた統一基準へ"),
    ]),
    "images/tl_antelope.png": ("Antelope Audio のあゆみ", [
        ("2005年頃", "Igor Levinが創業", "Aardvark(AardSync)出身"),
        ("2011年頃", "I/F市場に本格参入", "クロック専業からの拡大"),
        ("近年", "FPGAエフェクトモデリング", "ハードウェアDSPで展開"),
    ]),
    "images/tl_mogami_canare.png": ("Mogami / Canare のあゆみ", [
        ("1957年頃", "Mogami 創業", "モガミ電線(長野県)"),
        ("1970", "Canare 創業", "カナレ電気(名古屋)、1974年に株式会社化"),
        ("以降", "世界標準ケーブルへ", "信頼性の積み重ねだけで"),
    ]),
    "images/tl_chandler.png": ("Chandler Limited のあゆみ", [
        ("1999", "アメリカで創業", "Wade Goekeが自宅で開始"),
        ("2004年頃", "EMI/Abbey Roadと公式提携", "歴史的回路の復刻ライセンス"),
        ("現在", "TG/REDDシリーズ展開", "500シリーズにも参入"),
    ]),
    "images/tl_millennia.png": ("Millennia Media のあゆみ", [
        ("1990", "録音制作会社として出発", "John La Grouが率いる"),
        ("1992", "機材メーカーとして設立", "自分用に作ったHV-3を製品化"),
        ("現在", "クラシック録音の現場で定評", "色を付けない増幅を追求"),
    ]),
}

if __name__ == "__main__":
    for p, (t, ev) in TIMELINES.items():
        draw_timeline(p, t, ev)
        print("wrote", p)
