import { BadRequestException } from '@nestjs/common';
import { diskStorage } from 'multer';
import * as path from 'path';

export const multerConfig = {
  storage: diskStorage({
    destination: './uploads',
    filename: (_, file, callback) => {
      const fileName =
        path.parse(file.originalname).name.replace(/\s/g, '') +
        '-' +
        Math.round(Math.random() * 1e9);

      const extension = path.parse(file.originalname).ext;
      callback(null, `${fileName}${extension}`);
    },
  }),
  fileFilter: (req, file, callback) => {
    const allowedFileTypes = ['audio/mpeg', 'audio/wav', 'audio/ogg'];
    if (!allowedFileTypes.includes(file.mimetype)) {
      return callback(new BadRequestException('File not allowed'), false);
    }
    callback(null, true);
  },
  limits: { fileSize: 5 * 1024 * 1024 },
};
