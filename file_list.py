import os

html_files = []

# Lặp qua các tệp trong thư mục hiện tại
for filename in os.listdir("."):
    # Nếu tệp có đuôi .html thì thêm vào danh sách
    if filename.endswith(".html"):
        html_files.append(f"<a href='/{filename}' style='display: block'>{filename}</a>")
# In danh sách các tệp có đuôi .html
print(html_files)

with open("index.html", "w") as file:
    for filename in html_files:
        file.write(filename + "\n")
