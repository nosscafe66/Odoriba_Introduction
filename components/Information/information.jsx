import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from './information.module.css';
import { Canvas, useFrame } from '@react-three/fiber';

function Cube(props) {
  const mesh = useRef();
  const [rotationSpeed] = useState(Math.random() * 0.02 + 0.01);

  useFrame(() => {
    mesh.current.rotation.x += rotationSpeed;
    mesh.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={'black'} />
    </mesh>
  );
}

export function Information() {
  const numCubes = 50;
  return (
    <div className={classes.wrapper}>

      {/* ①横長画像を一枚配置できる部分 */}
      {/* <div className={classes.imageSection}>
        <Image src="/path/to/your/image.jpg" alt="企業画像" width={1200} height={400} />
      </div> */}
      <div id="canvas">
        <Canvas className={classes.canvas}>
          <ambientLight intensity={0.5} />
          <spotLight intensity={0.5} position={[10, 10, 10]} />
          {Array.from({ length: numCubes }).map((_, index) => (
            <Cube
              key={index}
              position={[
                Math.random() * 10 - 5,
                Math.random() * 10 - 5,
                Math.random() * 10 - 5
              ]}
            />
          ))}
        </Canvas>
      </div>

      {/* ②企業理念などがわかる部分 */}
      <div className={classes.philosophySection}>
        <h2>企業理念</h2>
        <p>私たちの企業は、〇〇を目指して活動しています。〇〇を大切にし、〇〇なサービスを提供することを心がけています。</p>
      </div>

      {/* ③ざっくりどんなサービスがあるのかの説明を五つくらいしている部分 */}
      <div className={classes.servicesSection}>
        <h2>サービス概要</h2>
        <ul>
          {['Moc', 'design', 'development', 'test', 'release'].map((service, index) => (
            <li key={index}>
              <Image src={`/img/${service}.png`} alt={`${service}の画像`} layout="responsive" width={800} height={600} />
              <div>{service}：〇〇の説明...</div>
              <Link href="/service">
                詳細ページへ
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ④よくある質問部分 */}
      <div className={classes.faqSection}>
        <h2>よくある質問</h2>
        <div>
          <h3>質問1</h3>
          <p>質問1の答え...</p>
        </div>
        <div>
          <h3>質問2</h3>
          <p>質問2の答え...</p>
        </div>
        <div>
          <h3>質問3</h3>
          <p>質問3の答え...</p>
        </div>
      </div>

    </div>
  );
}
