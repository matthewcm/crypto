import request from 'supertest';
import app from '../app';
import axios from 'axios';

jest.mock('axios', () => ({
	get: jest.fn(),
	isAxiosError: jest.fn(),
}));

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Status Check API', () => {
	it('should respond with "Bittrex API is up and running" when Bittrex API is up', async () => {
		mockedAxios.get.mockResolvedValue({ status: 200 });
		const res = await request(app).get('/status');
		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual({
			status: 'OKAY',
			checks: [{ status: 'OKAY', message: 'Bittrex API is up and running' }],
		});
	});

	it('should respond with "Bittrex API is down" when Bittrex API is down', async () => {
		jest.spyOn(console, 'error').mockImplementation();
		mockedAxios.isAxiosError.mockReturnValueOnce(true);

		mockedAxios.get.mockRejectedValue(new Error('Bittrex API is down'));
		const res = await request(app).get('/status');
		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual({
			status: 'FAIL',
			checks: [{ status: 'FAIL', message: 'Bittrex API is down' }],
		});
		expect(console.error).toHaveBeenCalled();
	});
});
