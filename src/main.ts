import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { cors: true });

	const config = new DocumentBuilder()
		.setTitle('Vitation Engine')
		.setDescription('Vitation Engine Managed by Vitation Team')
		// .setLicense('Vitation Team', '')
		.setVersion('BETA')
		.addSecurity('bearer', {
			type: 'http',
			scheme: 'bearer',
			bearerFormat: 'JWT',
			in: 'header'
		})
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('', app, document);

	await app.listen(4300);
}
bootstrap();
