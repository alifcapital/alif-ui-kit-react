import { useState } from 'react';
import { Bell, User } from 'alif-icon-kit-react';
import { Popover } from '../../../src';

export const PopoverApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const TriggerElement = (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          height: '40px',
          width: '40px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Bell />
        <div
          style={{
            position: 'absolute',
            right: '2px',
            top: '2px',
            borderRadius: '100%',
            backgroundColor: '#ff0000',
          }}
        >
          <div
            style={{
              display: 'flex',
              height: '18px',
              width: '18px',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontSize: '12px',
              fontWeight: '550',
            }}
          >
            {3}
          </div>
        </div>
      </div>
  );

  return (
    <div
      style={{
        display: 'grid',
        gap: "50px",
        justifyContent: 'center',
        backgroundColor: '#F2F5F8',
      }}
    >
      <Popover
        ariaLabel='test'
        open={isOpen}
        onOpenChange={handleClick}
        triggerElement={TriggerElement}
        // noStyle
        align="end"
        alignOffset={-8}
      >
        <div style={{ width: '328px' }}>
          <h1
            style={{
              paddingBottom: '24px',
              fontSize: '18px',
            }}
          >
            Новости и уведомления
          </h1>
          <div>
            <div>
              <div
                style={{
                  height: '1px',
                  backgroundColor: '#ecf0f3',
                }}
              />
              <div style={{ padding: '24px 0' }}>
                <h4>Анвар теперь в alif.mobi</h4>
                <div
                  style={{
                    color: '#73787d',
                    paddingTop: '8px',
                  }}
                >
                  4 июня, 14:03
                </div>
              </div>
              <div
                style={{
                  height: '1px',
                  backgroundColor: '#ecf0f3',
                }}
              />
              <div style={{ padding: '24px 0' }}>
                <img
                  style={{ paddingBottom: '24px' }}
                  src="https://vite-without-lp.netlify.app/image-ham.jpg"
                  alt=""
                />
                <h4
                  style={{
                    paddingBottom: '8px',
                  }}
                  onClick={handleClick}
                >
                  Верим в лучшее
                </h4>
                <p>В целом соответствует всяким нуждам. Идейные соображения следует восприн...</p>
                <div
                  style={{
                    color: '#73787d',
                    paddingTop: '16px',
                  }}
                >
                  4 июня, 14:03
                </div>
              </div>
              <div
                style={{
                  height: '1px',
                  backgroundColor: '#ecf0f3',
                }}
              />
              <div style={{ padding: '24px 0' }}>
                <h4
                  style={{
                    paddingBottom: '8px',
                  }}
                >
                  Переживаем за вас 💚
                </h4>
                <p>Рекомендуем совершать оплату услуг онлайн и поменьше выходить из дома</p>
                <div
                  style={{
                    color: '#73787d',
                    paddingTop: '16px',
                  }}
                >
                  12 июня, 09:36
                </div>
              </div>
              <div
                style={{
                  color: '#00af66',
                }}
              >
                Все уведомления
              </div>
            </div>
          </div>
        </div>
      </Popover>

      <Popover
        triggerElement={<User/>}
        ariaLabel='test'
        open={open}
        onOpenChange={()=> setOpen((prev) => !prev)}
      >
        test content
      </Popover>
      <div>
        <div>
          Переводы
        </div>
        <div style={{width: "700px"}}>
          <ul style={{display: 'flex', gap: "200px", flexWrap: "wrap"}}>
            <li>1</li>
            <li>2</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
