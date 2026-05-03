import sys
try:
    from PIL import Image, ImageChops
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image, ImageChops

def trim(im):
    # 背景色（左上のピクセル）を取得
    bg_color = im.getpixel((0, 0))
    bg = Image.new(im.mode, im.size, bg_color)
    
    # 差分を取得
    diff = ImageChops.difference(im, bg)
    
    # 少しのノイズを許容するための処理
    diff = ImageChops.add(diff, diff, 2.0, -100)
    
    # バウンディングボックスを取得してクロップ
    bbox = diff.getbbox()
    if bbox:
        # 少しだけ余白を残す
        padding = 10
        left = max(0, bbox[0] - padding)
        top = max(0, bbox[1] - padding)
        right = min(im.size[0], bbox[2] + padding)
        bottom = min(im.size[1], bbox[3] + padding)
        return im.crop((left, top, right, bottom))
    return im

try:
    path = "public/images/kikaku/color1-3.png"
    im = Image.open(path)
    print(f"Original size: {im.size}")
    
    cropped_im = trim(im)
    print(f"Cropped size: {cropped_im.size}")
    
    cropped_im.save(path)
    print("Successfully cropped and saved the image.")
except Exception as e:
    print(f"Error: {e}")
