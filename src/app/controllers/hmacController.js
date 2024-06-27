const crypto = require('crypto');
const KeySchema = require('../models/hmac')
const fs = require('fs');
const path = require('path');
const htmlPath = path.join(__dirname, '../html/hmac.html');




class NewsController {
  
/// Hàm tạo Key và mã Hash
async hmac(req, res, next) {
  try {
      const newKey = crypto.randomBytes(32).toString('hex');
      const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

      const hmac = crypto.createHmac('sha256', newKey).update(htmlContent).digest('hex');

      await KeySchema.create({ key: newKey, hmac });

      res.render('blogs/hmac', { key: newKey, hmac });
    }
   catch (error) {
    console.error('Lỗi:', error);
    res.status(500).send('Có lỗi xảy ra.');
  }
}

/// Hàm so sánh mã băm tải về từ internet với mã hash vừa băm

async compare(req, res, next) {
  try {

    
    const latestKey = await KeySchema.findOne().sort({ _id: -1 }).exec();

    if (!latestKey) {
      
      return res.json('file đã bị sửa đổi');
    }

    const newHtmlContent = fs.readFileSync(htmlPath, 'utf-8');
    const newHmac = crypto.createHmac('sha256', latestKey.key).update(newHtmlContent).digest('hex');

    // So sánh 
    if (newHmac === latestKey.hmac) {
      
      return res.json('file không bị sửa đổi');
    } else {
      
      return res.json('file đã bị sửa đổi');
    }
  } catch (error) {
    console.error('Lỗi:', error);
    return false;
  }
}

async readkey(req, res, next) {
  try {
    res.render('blogs/readkey')
  } catch (error) {
    console.error('Lỗi:', error);
    return false;
  }
}






}

module.exports = new NewsController();