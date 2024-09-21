'use client';

import { useRef, useState } from 'react';
import styles from './image-picker.module.css';
import Image from 'next/image';

interface IImagePickerProps {
    label: string;
    name: string;
}

export default function ImagePicker({ label, name }: IImagePickerProps) {
    const [pickedImage, setPickedImage] = useState<any>();
    const imageInput = useRef<any>();

    const handleClick = () => {
        imageInput.current.click();
    }

    const handleImageChange = (event: any) => {
        const file = event.target.files[0];

        if (!file) return;

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        };

        fileReader.readAsDataURL(file);
    }

    return (
        <div className={styles.picker}>
            <label htmlFor={name}>{label}</label>

            <div className={styles.controls}>
                <div className={styles.preview}>
                    {!pickedImage && (
                        <p>No image picked yet.</p>
                    )}
                    {pickedImage && (
                        <Image
                            src={pickedImage}
                            alt="The image selected by the user."
                            fill
                        />
                    )}
                </div>

                <input
                    className={styles.input}
                    type="file"
                    id="image"
                    accept="image/png, image/jpeg, image/jpg"
                    name={name}
                    ref={imageInput}
                    onChange={handleImageChange}
                />

                <button
                    className={styles.button}
                    type="button"
                    onClick={handleClick}
                >
                    Pick an Image
                </button>
            </div>
        </div>
    )
}