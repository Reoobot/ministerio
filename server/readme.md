## Steps to start

  1) npm i -g@nest/cli
  2) nest g module ministerio
  3) gitignoe para el module
  4)npm install mongose @nestjs/mongose
  5)sudo service mongod start
  6)npm install@types/mongose
  7)nest g resource image
  8)npm i @nestjs/swager-ui


## Steps to follow
-We install the followind package => npm i -D @types/multer
-We create => a module, a controller a service =>
        nest g mo images
        nest g co images
        nest g s images
        nest g cl images/dto/imagesDto
-We install mongoose and make the conection to the database => npm install
--save @nestjs/mongose mongoose
-we terminate the updaloadFile method in the controller in the service
