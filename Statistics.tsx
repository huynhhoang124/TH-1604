import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Statistic, message } from 'antd';
import axios from 'axios';

const Statistics: React.FC = () => {
  const [statistics, setStatistics] = useState<any>(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get('/api/statistics');
        setStatistics(response.data);
      } catch (error) {
        message.error('Lỗi khi tải thống kê!');
      }
    };

    fetchStatistics();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <Title level={3}>Thống kê</Title>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Tổng lượt lịch trình"
              value={statistics ? statistics.totalTrips : 0}
              prefix={<Icon type="schedule" />}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Địa điểm phổ biến"
              value={statistics ? statistics.popularDestination.name : 'Đang tải...'}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Statistics;
