import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DataSource, Repository } from 'typeorm';
import { TransactionEntry } from '../entities/transaction-entry.entity';
import { Text, Button } from '@rneui/base';

//prepare the function that will getTransactionEntries
export const getTransactionEntries = async (dataSource: DataSource, setTransactionEntries: 
    React.Dispatch<React.SetStateAction<TransactionEntry[]>>) => {
     try {
     const transactionEntryRepository: Repository<TransactionEntry> = 
    dataSource.getRepository(TransactionEntry);
     let transactionEntries = await transactionEntryRepository.find();
     //Below really should not be here. It is just to load some fictitious data for quick test of our data source.
     /*if (transactionEntries.length === 0) {
     const newTransactionEntry = new TransactionEntry();
     newTransactionEntry.description = 'Just a sample entry';
     newTransactionEntry.amount = 1000;
     await transactionEntryRepository.save(newTransactionEntry);
     transactionEntries = await transactionEntryRepository.find();
     }*/
     setTransactionEntries(transactionEntries);
     } catch (error) {
     setTransactionEntries([]); //None available due to error
     }
    }
    export const createTransactionEntry = async (dataSource: DataSource, transactionEntryData: 
        TransactionEntry, transactionEntriesInState: TransactionEntry[], setTransactionEntries: 
        React.Dispatch<React.SetStateAction<TransactionEntry[]>>, setOnAddEntry: 
        React.Dispatch<React.SetStateAction<boolean>>) => {
         try {
         const transactionEntryRepository: Repository<TransactionEntry> = 
        dataSource.getRepository(TransactionEntry);
         const newTransactionEntry = transactionEntryRepository.create(transactionEntryData);
         const transactionEntry = await transactionEntryRepository.save(newTransactionEntry);
         //time to modify state after create
         const transactionEntries = transactionEntriesInState;
         transactionEntries.push(transactionEntry);
         setTransactionEntries(transactionEntries);
         setOnAddEntry(false);
         } catch (error) {
         console.log(error);
         }
        };
        export const deleteTransactionEntry = async (dataSource: DataSource, id: number, 
            transactionEntriesInState: TransactionEntry[], setTransactionEntries: 
            React.Dispatch<React.SetStateAction<TransactionEntry[]>>) => {
             try {
             const transactionEntryRepository: Repository<TransactionEntry> = 
            dataSource.getRepository(TransactionEntry);
             await transactionEntryRepository.delete(id);
             //remove entry from state
             const currentEntries = transactionEntriesInState;
             //find the index corresponding to the item with the passed id
             const index = currentEntries.findIndex((entry) => entry.id === id);
             currentEntries.splice(index, 1);//remove one element starting from the index position. This is removing the element itself
             //update state with the spliced currentItems
             setTransactionEntries(currentEntries );
             } catch (error) {
             console.log(error);
             }
            };