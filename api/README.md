# chạy server api
```
node main.js
```
# đăng ký user
```
POST localhost:3000/api/register

{
  "email": "hehe@mail.com",
  "password": "matkhau123"
}
```
# đăng nhập
```
POST localhost:3000/api/signin

{
  "email": "hehe@mail.com",
  "password": "matkhau123"
}
```
# get list product
```
GET localhost:3000/api/products
```