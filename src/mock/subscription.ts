import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/subscriptions',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: [
          {
            id: '1',
            customerName: 'John Smith',
            plan: 'A',
            status: 'active',
            startDate: '2024-06-01',
            endDate: '2025-06-01',
          },
        ],
      };
    },
  },
  {
    url: '/api/subscriptions',
    method: 'post',
    response: ({ body }) => {
      return {
        code: 0,
        message: 'Subscription created',
        data: body,
      };
    },
  },
] as MockMethod[];