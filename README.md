# crawl-data-cover-hcm-city
This project will collect data to support project rent-house
Project crawl data from google maps.

Project sẽ lấy dữ liệu về các đối tương * xung quanh 1 vị trí (lat, lng). bán kình 50000m.
Store: mongoDB → sẽ chuyển sang Postgres. 
DB name: rent-house 
collection/ table: places → có thể sẽ chia nhỏ theo từng đối tượng cụ thể
Các địa điểm lấy dữ liệu sẽ được xử lí để có thể bao phủ hết TP-HCM.

các chủ thể bao gồm: bank, school, market, airport, bus station, gas station, hospital,
police station, government department.

Notes: 
 - link cloud mongodb :  https://cloud.mongodb.com/v2/5d02240579358eb78dc231bd#metrics/replicaSet/5d0225409ccf64f0acee2c5a/explorer