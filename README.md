# 🧵 ThreadTrack – Apparel Tech Pack & Discrepancy Tracking Platform

> **Nền tảng CRM & Quản lý tiến trình tài liệu kỹ thuật ngành may mặc.**  
> Giải quyết triệt để bài toán lệch thông số kỹ thuật (Spec Discrepancy) và tắc nghẽn thông tin trao đổi qua email giữa xưởng may và đối tác (Brand/Buyer).

---

## 📌 Tổng quan bài toán (Domain Problem)

Trong quy trình phát triển mẫu may mặc, tài liệu kỹ thuật (Tech Pack) từ khách hàng thường xuyên phát sinh lỗi: lệch thông số đo (POM), thiếu mã màu phụ liệu, hoặc sai khác giữa rập và bản vẽ phẳng (Flat Sketch). 

Kỹ thuật viên rập và Merchandiser thường phải xử lý thủ công qua bảng tính Excel và chuỗi email rời rạc, dẫn đến:
* **Mất dấu tiến độ:** Không rõ đơn hàng đang chờ phản hồi từ ai, đã tắc bao nhiêu ngày.
* **Rủi ro sai mẫu:** Tiến hành cắt vải/may mẫu khi thông số chưa được khách hàng chốt bằng văn bản.
* **Tốn thời gian:** Soạn đi soạn lại các email báo lỗi kỹ thuật thủ công.

**ThreadTrack** chuẩn hóa toàn bộ quy trình này theo mô hình CRM tinh gọn: quản lý vòng đời đơn hàng qua 5 giai đoạn cốt lõi, theo dõi chỉ số sức khỏe đơn hàng (Health Status), và quản lý tập trung các vướng mắc (Discrepancy Log) với khả năng tổng hợp email tự động.

---

## ✨ Tính năng cốt lõi (Core Features)

### 1. Quản lý tiến trình 5 bước (Stepper Pipeline)
Theo dõi chính xác trạng thái xử lý hồ sơ kỹ thuật theo thời gian thực:
1. `INTAKE`: Tiếp nhận tài liệu & rập ban đầu.
2. `AUDIT_SPEC`: Rà soát thông số, phát hiện sai sót.
3. `CALC_BOM_THREAD`: Tính định mức nguyên phụ liệu & định mức chỉ may.
4. `SEWING_ROUTING`: Lập quy trình công nghệ may & thiết bị cử gá.
5. `COMPLETED`: Phê duyệt Tech Pack hoàn chỉnh, sẵn sàng đưa xuống xưởng.

### 2. Giám sát sức khỏe đơn hàng (CRM Health Metrics)
* Hệ thống cờ báo động (`ON_TRACK`, `WAITING_BUYER`, `BLOCKED`, `COMPLETED`).
* Đếm số ngày chờ khách hàng phản hồi (`waitingSince`) để kịp thời nhắc việc (Follow-up).

### 3. Quản lý vướng mắc & Soạn Email nhanh (Discrepancy Center)
* Cho phép ghi nhận chi tiết từng lỗi phát hiện (Bảng size, Vải, Chỉ may, Rập).
* Gom nhóm các lỗi chưa giải quyết (`OPEN`) và tự động xuất mẫu email trao đổi kỹ thuật chuẩn form gửi khách hàng.
* Lưu vết nội dung phản hồi (`buyerReply`) và tự động cập nhật lại trạng thái đơn hàng khi sự cố được đóng (`RESOLVED`).

### 4. Chuẩn hóa dữ liệu danh mục (Master Data)
* Quản lý tập trung: Khách hàng/Thương hiệu (`buyers`), Mùa vụ (`seasons`), Loại sản phẩm (`product_types`).

---

## 🛠 Tech Stack

* **Backend:** Node.js, Express.js (RESTful Architecture).
* **ORM:** Sequelize ORM (PostgreSQL dialect).
* **Database:** PostgreSQL 16+ (Hỗ trợ ràng buộc quan hệ chặt chẽ, tối ưu truy vấn).
* **Frontend:** Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn/ui.
* **Testing & Tools:** Postman / Swagger, Docker Compose.

---

## 🗄 Cấu trúc Cơ sở dữ liệu (Database Schema)

Hệ thống được thiết kế theo chuẩn hóa dữ liệu quan hệ (RDBMS):

```text
buyers ──────────┐
seasons ─────────┼──> style_orders ──< order_issues
product_types ───┤          │
users (Assignee) ┘          │
users (Creator) ────────────┘
