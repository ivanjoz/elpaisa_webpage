#!/bin/bash
AWS_PROFILE="ivanjoz" #QAS
AWS_S3="web-projects-repo/elpaisa" #QAS
PUBLICAR_ASSETS=""

echo "Seleccione assets a publicar: (Es posible escoger más de 1. Ejemplo: '123')"
echo "[1] Frontend [2] Frontend (Assets)"
read ACCIONES


echo "Obteniendo los últimos cambios del repositorio (GIT PULL)..."

echo "Usando AWS Profile: $AWS_PROFILE"

#PUBLICAR FRONTEND
if [[ $ACCIONES == *"1"* ]]; then

    echo "=== PUBLICANDO FRONTEND ==="
    echo "Enviando archivos a S3: $AWS_S3"

    S3_SYNC="s3 sync ./out"
    S3_CP="s3 cp ./out"

    npm run build

    aws --profile $AWS_PROFILE $S3_SYNC/_next s3://$AWS_S3/_next --exclude "*" --include "*.js"  --content-type application/javascript --delete
    aws --profile $AWS_PROFILE $S3_SYNC/_next s3://$AWS_S3/_next --exclude "*" --include "*.css" --content-type text/css --delete

    aws --profile $AWS_PROFILE $S3_CP/index.html s3://$AWS_S3/index.html --content-type text/html
    aws --profile $AWS_PROFILE $S3_CP/404.html s3://$AWS_S3/404 --content-type text/html

    if [[ $ACCIONES == *"2"* ]]; then
        echo "Publicando assets..."

       aws --profile $AWS_PROFILE $S3_SYNC/images s3://$AWS_S3/images --size-only
       aws --profile $AWS_PROFILE $S3_SYNC/cms s3://$AWS_S3/cms --size-only
       aws --profile $AWS_PROFILE $S3_SYNC/libs s3://$AWS_S3/libs --size-only
       aws --profile $AWS_PROFILE $S3_SYNC/svg s3://$AWS_S3/svg --size-only
    fi

    aws --profile ivanjoz cloudfront create-invalidation --distribution-id E3G1VGF5QRTZ32 --paths "/index.html" "/404.html"
    echo "El deploy frontend finalizado!"

fi

echo "La publicación ha finalizado!. Presione cualquier tecla para salir"
read
kill -9 $PPID
