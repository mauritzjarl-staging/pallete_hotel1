FROM node:18-alpine

WORKDIR /app

# 1. Dependencies install karein
COPY package.json package-lock.json* ./
RUN npm install

# 2. Project files copy karein
COPY . .

# 3. Next.js app ko production ke liye build karein
RUN npm run build

# 4. App start karein (Next.js default port 3000 par chalta hai)
EXPOSE 3000
CMD ["npm", "start"]