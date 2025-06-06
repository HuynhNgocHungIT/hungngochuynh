export type Project = {
    id: string;
    name: string;
    description: string[];
    startDate: string;
    endDate: string;
    technologies: string[];
    link: string;
}
export const projects: Project[] = [
    {
        id: '1',
        name: 'Dự án Quản lý Công việc',
        description: [
            'Xây dựng ứng dụng web quản lý công việc cá nhân.',
            'Cho phép người dùng tạo, chỉnh sửa và xóa công việc.',
            'Tích hợp tính năng thông báo nhắc nhở công việc.'
        ],
        startDate: '2023-01',
        endDate: '2023-03',
        technologies: ['ReactJS', 'NodeJS', 'MongoDB'],
        link: 'https://example.com/avatar.jpg'
    },
    {
        id: '2',
        name: 'Ứng dụng Thương mại Điện tử',
        description: [
            'Phát triển ứng dụng thương mại điện tử với chức năng giỏ hàng và thanh toán.',
            'Tích hợp API thanh toán trực tuyến.',
            'Thiết kế giao diện người dùng thân thiện và dễ sử dụng.'
        ],
        startDate: '2023-04',
        endDate: '2023-06',
        technologies: ['ReactJS', 'NodeJS', 'Express', 'MongoDB'],
        link: 'https://example.com/avatar.jpg'
    }
]
